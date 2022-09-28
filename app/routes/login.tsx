import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction, json, ActionFunction, redirect } from '@remix-run/node';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Container,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { GoogleButton, FacebookButton } from 'app/SocialButtons/SocialButtons';
import { Form } from '@remix-run/react';

export async function loader(params:type) {
  const res = await fetch("https://recursing-bell-xtl2ro51rb.projects.oryapis.com/self-service/login/api");
  //console.log(res)
  return json(await res.json())
} 


export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  console.log(formData)
  const flow = String(formData.get("id"))
  var url = "https://recursing-bell-xtl2ro51rb.projects.oryapis.com/self-service/login?flow=";
  var posturl = url.concat(flow)
  console.log(posturl);
  const res1 = await fetch(posturl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData
    })
  });  
  console.log(res1)
  return json(res1.json)
}     
      
      
      //console.log(res);
    

export default function login(props: PaperProps) {
  const flow = useLoaderData();
  //const res1 = useActionData();
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      identifier: '',
      password: '',
      method: 'password',
      terms: true,
    },

    validate: {
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });


  return (
    <Container size={720} my={40}>  
        <Paper radius="md" p="xl" withBorder {...props} >
        <Text size="lg"  sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })} align="center">
            Welcome to Mantine, {type} with
        </Text>
        
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Form id='credentials' method='post'>
            <input type="hidden" id="flow" value={flow.id} />
            <TextInput label="identifier" id="identifier" placeholder="UserID" required/>
            <PasswordInput label="password" id="password" placeholder="Your password" required mt="md"/>

            <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                Forgot password?
            </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl"  id="btnSubmit">
            Sign in
            </Button>
          </Form>
        </Paper>
        
          <Text>{flow.id}</Text>
        

        <Group grow mb="mb" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <FacebookButton radius="xl">Twitter</FacebookButton>
        </Group>

        <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Create account
            </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}