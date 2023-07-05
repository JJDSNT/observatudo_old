import DB from "../../database/config/ormconfig";
import { NextResponse } from "next/server";
import { UserRepository } from "../../repositories/userRepository";
import { Cidade } from "@/app/models/Cidade";

export async function GET() {
  try{
    const cidades = await DB.getRepository(Cidade).find();
    return NextResponse.json({ cidades });
  } catch (error ) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  /*try {
    const userRepository = new UserRepository;
    const user = await userRepository.createUser();
    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }*/
}