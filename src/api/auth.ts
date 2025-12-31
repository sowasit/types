/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Authentication and registration API contracts.
 */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  tenantName?: string;
}

export interface RegisterResponse {
  success: boolean;
  token: string;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  tenant?: {
    id: string;
    name: string;
  };
}
