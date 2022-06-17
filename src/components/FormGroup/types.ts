export interface IFormData {
  signUp?: boolean;
  onFinish: (values:{email: string, password: string}) => void;
}
