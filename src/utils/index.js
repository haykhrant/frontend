export const formatCategories = (categories) => {
  return categories?.map((category) => ({
    id: category.id,
    name: category.categoryName,
    subCategories: category.productTypeResponses?.map((subCategory) => ({
      id: subCategory.id,
      name: subCategory.productTypeName,
    })),
  }));
};
