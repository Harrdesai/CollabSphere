"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import registerUserSchema from "../zodSchema/registerUser.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  username: string;
  password: string;
  confirmPassword: string;
  courseName: string;
  about: string;
  twitter: string;
  github: string;
  linkedIn: string;
  hashnode: string;
  peerlist: string;
}

const Register: React.FC = () => {
  const [loading] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const form = useForm({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      username: "",
      password: "",
      confirmPassword: "",
      courseName: "",
      about: "",
      twitter: "",
      github: "",
      linkedIn: "",
      hashnode: "",
      peerlist: "",
    },
  });

  const onSubmit = (values: RegisterProps) => {
    console.log(values);
  };

  return (
    <Card className="w-2/5">
      <CardHeader className="flex text-3xl justify-center">Register</CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
            {/* first name and last name */}
            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex">
                      <FormControl>
                        <Input {...field} placeholder="First Name" />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex">
                      <FormControl>
                        <Input {...field} placeholder="Last Name" />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* email and mobile number */}
            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        maxLength={10}
                        {...field}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        {...field}
                        placeholder="Mobile Number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Username" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* password and confirm password */}
            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="off"
                        placeholder="Confirm Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <div className="flex">
                    <FormControl>
                      <Textarea {...field} placeholder="Describe yourself" />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            {/* On change showw the link field */}
            <FormLabel>
              <Checkbox onClick={() => setShowLinks(!showLinks)} />
              Add Social Profile Link
            </FormLabel>
            {showLinks && (
              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="w-14">
                          <Tooltip>
                            <TooltipTrigger>
                              <img
                                src="/src/assets/x.svg"
                                className="w-9 h-9"
                                alt="twitter"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Twitter</p>
                            </TooltipContent>
                          </Tooltip>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="w-14">
                          <Tooltip>
                            <TooltipTrigger>
                              <img
                                src="/src/assets/github.svg"
                                className="w-9 h-9"
                                alt="github"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>GitHub</p>
                            </TooltipContent>
                          </Tooltip>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="w-14">
                          <Tooltip>
                            <TooltipTrigger>
                              <img
                                src="/src/assets/linkedin.svg"
                                className="w-9 h-9"
                                alt="linkedin"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>LinkedIn</p>
                            </TooltipContent>
                          </Tooltip>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hashnode"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="w-14">
                          <Tooltip>
                            <TooltipTrigger>
                              <img
                                src="/src/assets/hashnode.svg"
                                className="w-9 h-9"
                                alt="hashnode"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Hashnode</p>
                            </TooltipContent>
                          </Tooltip>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="peerlist"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="w-14">
                          <Tooltip>
                            <TooltipTrigger>
                              <img
                                src="/src/assets/peerlist.svg"
                                className="w-9 h-9"
                                alt="peerlist"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Peerlist</p>
                            </TooltipContent>
                          </Tooltip>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            )}
            <Button type="submit" className="w-full h-9">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Register;
