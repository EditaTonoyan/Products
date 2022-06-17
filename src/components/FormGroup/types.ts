export interface IFormData {
  signUp?: boolean;
  onFinish: (val:any) => void;
  onFinishFailed: (val:any) => void
}
