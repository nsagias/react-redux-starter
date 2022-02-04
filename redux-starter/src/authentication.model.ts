import React from "react";

export interface IAuthentication {
  isAuthenticated: boolean;
}

export interface IAuthFormSubmit {
  (event: React.FormEvent): void;
}
