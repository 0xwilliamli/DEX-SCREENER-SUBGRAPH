import { gql } from "@apollo/client";
import { uniswapClient } from "@/lib/apolloclients";
import { NextResponse } from "next/server";

const GET_UNISWAP_POOLS = gql`{
	pools {
		token0 {
		  name
		  symbol
		}
		token0Price
		token1 {
		  name
		  symbol
		}
		token1Price
		totalValueLockedUSD
		txCount
		liquidity
		liquidityProviderCount
	  }
  }`;

export async function POST(req: Request) {
	if (req.method === 'POST') {
		try {
		  const { data } = await uniswapClient.query({
			query: GET_UNISWAP_POOLS
		  });
		  
		  // Return the data fetched from the GraphQL endpoint
		  return NextResponse.json({ data: data.pools, count: data.pools.length }, { status: 200 });
		} catch (error) {
		  console.error("Error fetching data:", error);
		}
	  } else {
		// res.status(405).json({ error: "Method Not Allowed" });
	  }
}
