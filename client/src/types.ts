export type TrackType = {
   track: {
      id:string
      title: string
      // description: string
      thumbnail: string
      author: AuthorType
   
      modulesCount: number

      length: number
   }
  }

  export type  AuthorType = {
     name: string
     id: string
     photo: string
  }



  export type  ModulesType = {
   videoUrl: string
   title: string
   content: string
}