import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login - Amigos Game Dev",
  description: "Login to your Amigos Game Dev account",
};

export default function LoginPage() {
  return <LoginForm />;
} 