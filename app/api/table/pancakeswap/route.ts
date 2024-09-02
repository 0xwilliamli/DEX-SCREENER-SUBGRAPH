import { gql } from "@apollo/client";
import { pancakeswapClient } from "@/lib/apolloclients";
import { NextResponse } from "next/server";

const GET_PANCAKESWAP_PAIRS = gql`
  {
    pairs {
      token0 {
        name
        symbol
      }
      token0Price
      token1 {
        symbol
        name
      }
      token1Price
      txCount
      volumeUSD
      liquidityProviderCount
    }
  }
`;

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { data } = await pancakeswapClient.query({
        query: GET_PANCAKESWAP_PAIRS
      });
      console.log(data);
      // Return the data fetched from the GraphQL endpoint
      return NextResponse.json({ data: data.pairs, count: data.pairs.length }, { status: 200 });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error if needed
    }
  }
  // Return an error response if the method is not allowed or if there's an issue with the request
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
