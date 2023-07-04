import { NextResponse } from "next/server";
import { UserRepository } from "../../repositories/userRepository";

export async function GET() {
  try {
    const userRepository = new UserRepository;
    const user = await userRepository.createUser();
    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}