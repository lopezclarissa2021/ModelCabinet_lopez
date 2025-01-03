import { Asset } from "./asset";

export interface projectAsset {
  $values: Asset[]
}
export interface Project {

  projectId: number,
  name: string,
  creationDate: Date,
  modifiedDate: Date,
  description: string,
  author: string,
  version: string,
  assets: projectAsset,
  shortDescription: string,

}
