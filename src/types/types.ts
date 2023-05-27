export type BookResponse = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: BookVolumeInfo;
    saleInfo: Object;
    accessInfo: Object;
    searchInfo: {
        textSnippet: string
    };
}

export type BookVolumeInfo = {
    title: string;
    subtitle: string;
    authors: Array<string>;
    publisher: string;
    publisherDate: string;
    description: string;
    industryIdentifiers: Array<string>;
    readingModes: object;
    pageCount: number;
    printType: string;
    categories: Array<string>;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: object;
    imageLinks: ImageLink;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

type ImageLink = {
    smallThumbnail: string;
    thumbnail: string
}