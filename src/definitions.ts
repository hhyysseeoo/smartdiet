export interface smartdietPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
