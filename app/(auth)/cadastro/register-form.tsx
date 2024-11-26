"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import Form from "next/form";
import { Input } from "postcss";

import registerAction from "./registerAction";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <Form action={formAction}>
      <div>
        <Label>Nome</Label>
        <Input type="text" name="name" placeholder="Fulano de Tal" />
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" name="email" placeholder="eu@exemplo.com" />
      </div>
      <div>
        <Label>Senha</Label>
        <Input type="password" name="password" placeholder="********" />
      </div>
      <div>
        <Button className="w-full mt-6" type="submit">
          Registrar
        </Button>
      </div>
    </Form>
  );
}
