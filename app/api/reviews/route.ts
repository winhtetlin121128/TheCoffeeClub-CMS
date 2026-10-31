import { NextResponse } from "next/server";
import {
  getReviews,
  createReview,
} from "@/service/review.service";

export async function GET() {
  try {
    const reviews = await getReviews();

    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, rating, comment } = body;

    if (
      typeof rating !== "number" ||
      typeof comment !== "string" ||
      (name !== undefined && typeof name !== "string")
    ) {
      return NextResponse.json(
        { message: "Invalid review data" },
        { status: 400 }
      );
    }

    const review = await createReview({
      name,
      rating,
      comment,
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON" },
        { status: 400 }
      );
    }

    if (
      error instanceof Error &&
      ["Invalid review comment", "Rating must be between 1 and 5",
       "Name is too long"].includes(error.message)
    ) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to create review" },
      { status: 500 }
    );
  }
}