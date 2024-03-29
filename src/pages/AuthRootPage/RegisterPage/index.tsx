import { TextField, Typography } from "@mui/material";
import React from "react";

import AppLoadingButton from "@/components/LoadingButton";

import { IPropsRegister } from "@/common/types/auth";

import { useStyles } from "../styles";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" textAlign="center" fontSize="32px">
        Регистрация
      </Typography>
      <Typography variant="body1" textAlign="center" marginBottom="3px">
        Введите данные для регистрации
      </Typography>
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Имя"
        placeholder="Введите Ваше имя"
        variant="outlined"
        error={!!errors.firstName}
        helperText={errors.firstName ? `${errors.firstName.message}` : ""}
        {...register("firstName")}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Логин"
        placeholder="Введите Ваш логин"
        variant="outlined"
        error={!!errors.userName}
        helperText={errors.userName ? `${errors.userName.message}` : ""}
        {...register("userName")}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="email"
        label="E-mail"
        placeholder="Введите E-mail"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Повторите пароль"
        variant="outlined"
        error={!!errors.confirmPassword}
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
        }
        {...register("confirmPassword")}
      />
      <AppLoadingButton variant="contained" type="submit" loading={loading}>
        Регистрация
      </AppLoadingButton>
      <Typography variant="body1">
        У Вас уже есть аккаунт?
        <span
          className={classes.incitingText}
          onClick={() => navigate("/login")}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
