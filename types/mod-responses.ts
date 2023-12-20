interface AssetPreview {
  url: string;
  width: number;
  height: number;
  thumbnails: {
    "image/jpeg": Array<{
      url: string;
      width: number;
      height: number;
      contentType: string;
    }>;
  };
  contentType: string;
}

interface AssetTag {
  name: string;
  category: null;
}

interface AssetVersion {
  version: string;
  approved: boolean;
  published: boolean;
  gameVersion: string;
  minGameVersion: number;
  platformCompatibility: number;
  totalFileSize: number;
  meta: null;
  createdAt: string;
  updatedAt: string;
  assetId: string;
  dependenciesCount: number;
  scenariosCount: number;
}

interface AssetAuthor {
  roles: null;
  id: string;
  username: string;
}

interface Asset {
  averageRating: number;
  id: string;
  name: string;
  type: string;
  summary: string;
  description: string;
  license: string;
  licenseText: null;
  unlisted: boolean;
  private: boolean;
  blocked: boolean;
  ratingCount: number;
  subscriberCount: number;
  currentVersionNumber: string;
  currentVersionSize: number;
  previews: AssetPreview[];
  screenshots: AssetPreview[];
  meta: null;
  createdAt: string;
  updatedAt: string;
  author: AssetAuthor;
  contributors: any[];
  tags: AssetTag[];
  versions: AssetVersion[];
}

interface AssetVersionDetail {
  changelog: string;
  scenarios: any[];
  dependencies: any[];
}

interface GetAssetDownloadTotal {
  total: number;
}

interface PageProps {
  pathId: string;
  asset: Asset;
  assetVersionDetail: AssetVersionDetail;
  getAssetDownloadTotal: GetAssetDownloadTotal;
}

interface MyInterface {
  pageProps: PageProps;
  __N_SSP: boolean;
}


export {
  AssetPreview,
  AssetTag,
  AssetVersion,
  AssetAuthor,
  Asset,
  AssetVersionDetail,
  GetAssetDownloadTotal,
  PageProps,
  MyInterface
}
