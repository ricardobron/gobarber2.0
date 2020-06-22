export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFIle(file: string): Promise<void>;
}
