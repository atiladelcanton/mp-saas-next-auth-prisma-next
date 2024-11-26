"use client";

import { Button } from "@/components/ui/button";
import { Label } from '@/components/ui/label';
import Form from "next/form";
import { Input } from '@/components/ui/input';

import registerAction from "./registerAction";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <>
    {state?.success === false && (
      <div
      className=" text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"
      >
          <strong className="font-bold">Erro!</strong><br/>
          <span className="block sm:inline">{state?.message}</span>
    </div>)}

    {state?.success === true && (
      <div
      className=" text-xs mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"
      >
          <strong className="font-bold">Erro!</strong><br/>
          <span className="block sm:inline">{state?.message}</span>
    </div>)}

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
        <Button  disabled={isPending} className="w-full mt-6" type="submit">
          {isPending === false ? 'Registrar':'Registrando...'}
        </Button>
      </div>
    </Form>
    </>

  );
}
