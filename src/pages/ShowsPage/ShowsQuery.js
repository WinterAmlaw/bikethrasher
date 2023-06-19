export const showsQuery = `
{
  showListingsCollection {
    items{
      location
      event
      dateTime
    }
  }
  aboutPageCollection{
    items{
      header
      aboutSection
      img1{
        url
      }
      img1{
        url
      }        
    }
  }
}
`;