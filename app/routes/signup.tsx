import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
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



export default function signup(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Container size={720} my={40}>
        
        <Paper radius="md" p="xl" withBorder {...props} >
        <Text size="lg"  sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })} align="center">
            Welcome to Mantine, Sign Up with
        </Text>
        <Group grow mb="mb" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <FacebookButton radius="xl">Twitter</FacebookButton>
        </Group>
        <Text color="dimmed" size="sm" align="center" mt={5}>
            Have an account already?{' '}
            <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Sign In
            </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            </Group>
            <Button fullWidth mt="xl">
            Sign up
            </Button>
        </Paper>
        </Paper>
    </Container>
  );
}