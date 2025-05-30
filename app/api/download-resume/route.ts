import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the resume file in the public directory
    const filePath = path.join(process.cwd(), "public", "resume", "Ramachandiran_S_Resume.pdf")

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Return the file as a response
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Ramachandiran_S_Resume.pdf"',
      },
    })
  } catch (error) {
    console.error("Error serving resume:", error)
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 })
  }
}
