export default interface Customer {
  latitude: string;
  user_id: number,
  name: string,
  longitude: string
  inKm?: number // optional field for information
}