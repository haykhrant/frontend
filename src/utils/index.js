export const formatCategories = (categories) => {
  return categories?.map(({categoryResponse, productTypeResponses}) => ({
    id: categoryResponse.id,
    name: categoryResponse.categoryName,
    subCategories: productTypeResponses?.map((subCategory) => ({
      id: subCategory.id,
      name: subCategory.productTypeName,
    })),
  }));
};
