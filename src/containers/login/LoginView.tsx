import * as stylex from "@stylexjs/stylex";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconAlert } from "~/assets/icons";
import { styles } from "./LoginView.stylex";
import { Button, Icon, Input } from "~/components";
import { authStore } from "~/store";
import { Link, useNavigate } from "react-router-dom";
import { PATH_ROUTE } from "~/utils/constants";

type LoginViewProps = {};

const EMAIL = "demo@health.app";
const PASSWORD = "demo1234";

const INFO_AUTH_HTML = `Use email:<strong>${EMAIL}</strong> / password: <strong>${PASSWORD}</strong>`;

const SignInSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password of at least 6 characters" })
    .max(12, { message: "Password no more than 12 characters" }),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

const LoginView: React.FC<LoginViewProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const { ztSignIn } = authStore();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (data.email === EMAIL && data.password === PASSWORD) {
            ztSignIn({
              id: uuidv4(),
              email: data.email,
            });
            navigate("/");
            return resolve;
          }
          return reject("Incorrect username or password.");
        }, 1000),
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.boxLogin)}>
        <h3 {...stylex.props(styles.title)}>Sign in to Health</h3>
        <div {...stylex.props(styles.alert, styles.navigate)}>
          <Icon icon={IconAlert} size="small" />
          Go to
          <Link to={PATH_ROUTE.COLUMN_DIRECTORY}> コラム一覧</Link>. You can watch it without login.
        </div>
        <div {...stylex.props(styles.alert)}>
          <Icon icon={IconAlert} size="small" />
          <div dangerouslySetInnerHTML={{ __html: INFO_AUTH_HTML }} />
        </div>

        <form {...stylex.props(styles.form)} onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            type="text"
            error={errors.email?.message}
            placeholder="abc@example.com"
            label="Email"
          />
          <Input
            {...register("password")}
            error={errors.password?.message}
            type="password"
            placeholder="Password"
            label="Password"
          />

          <Button style={[styles.buttonBlackBg]} block disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
