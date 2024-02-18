import { prisma } from "../db";
import { NextRequest, NextResponse } from "next/server";

export const CREATE = async (req: NextRequest) => {
  try {
    const requestBody = await req.json();
    const createData = await prisma.user.create({
      data: {
        username: requestBody.username,
        email: requestBody.email,
        password: requestBody.password,
      },
    });

    NextResponse.json({ msg: "success", data: createData });
  } catch (error) {
    console.log(error);
    NextResponse.json({
      error: "An error occurred while creating the user",
    });
  }
};
