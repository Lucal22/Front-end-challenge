import { FilterPriorityTypes, FilterTypes } from '@/types/filters';

export function getCategory(type: FilterTypes) {
  if (type === FilterTypes.MUG) return 'mugs';
  if (type === FilterTypes.SHIRT) return 't-shirts';
  return '';
}

export function getPriority(priority: FilterPriorityTypes) {
  if (priority === FilterPriorityTypes.NEW) {
    return { field: 'created_at', order: 'ASC' };
  }
  if (priority === FilterPriorityTypes.BIGGEST_PRICE) {
    return { field: 'price_in_cents', order: 'DSC' };
  }
  if (priority === FilterPriorityTypes.MINOR_PRICE) {
    return { field: 'price_in_cents', order: 'ASC' };
  }
  return { field: 'sale', order: 'DSC' };
}

export const filterQuery = (
  type: FilterTypes,
  priority: FilterPriorityTypes,
) => {
  if (type === FilterTypes.ALL && priority === FilterPriorityTypes.POPULARITY) {
    return ` query{
      allProducts(sortField: "sales" sortOrder: "DSC"){
        id
        name
        price_in_cents
        image_url
      }
    }
    `;
  }
  const categoryFilter = getCategory(type) !== '';
  return ` query{
    allProducts(${
      categoryFilter ? `filter: {category: "${getCategory(type)}"},` : null
    } sortField: "${getPriority(priority)?.field}" sortOrder: "${
    getPriority(priority)?.order
  }"){
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `;
};
