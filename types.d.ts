declare module '@hookform/resolvers/zod' {
  export const zodResolver: any;
}

declare module 'react-hook-form' {
  export function useForm<T = any>(options?: {
    resolver?: any;
    defaultValues?: Partial<T>;
  }): {
    control: any;
    handleSubmit: (callback: (data: T) => void) => (e: any) => void;
    reset: () => void;
  };

  export const Controller: any;
  export const FormProvider: any;
  export const useFormContext: any;
  export const useFormState: any;
  export const useWatch: any;
  export const useFieldArray: any;
  export const useFormMethods: any;

  // Add missing type exports
  export type ControllerProps<TFieldValues = any, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    name: TName;
    control: Control<TFieldValues>;
    defaultValue?: any;
    rules?: any;
    render: (props: any) => any;
  };
  export type FieldPath<TFieldValues = any> = string;
  export type FieldValues = any;
  export type UseFormProps<TFieldValues = any> = any;
  export type UseFormReturn<TFieldValues = any> = any;
  export type Control<TFieldValues = any> = any;
  export type FieldError = any;
  export type FieldErrors<TFieldValues = any> = any;
} 