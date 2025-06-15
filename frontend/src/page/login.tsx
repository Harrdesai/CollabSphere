// src/page/login.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import loginSchema from "@/zodSchema/login.Schema";
import { useAuthStore } from "@/store/useAuthStore";

export interface LoginProps {
  email: string;
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {

  const { isLoggingIn, login } = useAuthStore()
  
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  })

  const onSubmit = async (values: LoginProps) => {
    
    try {

      await login(values);
      
    } catch (error) {
      
      console.log("Error logging in", error);

    }

  }
  return (
      <Card className="w-2/5 mt-4">
        <CardHeader>
          <CardTitle className="flex text-3xl justify-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
              <FormField
                control={form.control}
                name="emailOrUsername"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email or Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Email or Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField  
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
            {isLoggingIn ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
            </form>
          </Form>
        </CardContent>
      </Card> 
  )
}

export default LoginPage