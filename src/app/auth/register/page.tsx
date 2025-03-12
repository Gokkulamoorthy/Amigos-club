import { Metadata } from "next";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Register - Amigos Game Dev",
  description: "Create a new Amigos Game Dev account",
};

export default function RegisterPage() {
  return <RegisterForm />;
} 