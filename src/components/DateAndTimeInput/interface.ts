export default interface IProps {
  dateName: string;
  timeName: string;
  label?: string;
  isRequired?: boolean;
  isDescription?: boolean;
  minDate?: Date | string;
}
