import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from '@/prisma/client'

const satsDataSchema = z.object({
  itemno: z.string().min(1).max(6),
  title: z.string().min(1).max(6),
  type: z.string().min(1).max(3) 
})

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = satsDataSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const newIssue = await prisma.item.create({
    data: { itemno: body.itemno, title: body.title, type: body.type }
  });

  return NextResponse.json(newIssue, { status: 201 });
}