import { v4 as uuidv4 } from "uuid";

export const formatCategories = (categories = []) => {
  return categories.map(({ categoryResponse, productTypeResponses }) => ({
    id: categoryResponse.id,
    name: categoryResponse.categoryName,
    subCategories: productTypeResponses.map((subCategory) => ({
      id: subCategory.id,
      name: subCategory.productTypeName,
    })),
  }));
};

export const formatProducts = (products = []) => {
  return products.map(
    ({
      id,
      name,
      ownerComment,
      price,
      rating,
      customerResponse: { id: userId, username, fullname },
      productDescriptionRequestArrayList,
      productTypeResponse: { id: productId, productTypeName },
    }) => ({
      id,
      name,
      price,
      rating,
      description: ownerComment,
      userName: username,
      userFullName: fullname,
      userId,
      tags: productDescriptionRequestArrayList.map((el) => ({
        id: uuidv4(),
        name: el.description,
      })),
      productName: productTypeName,
      productId,
    })
  );
};

export const generateTokenString = (data) =>
  Object.values(data)
    .reduce((acc, curr) => {
      return acc + curr + ":";
    }, "")
    .slice(0, -1);
