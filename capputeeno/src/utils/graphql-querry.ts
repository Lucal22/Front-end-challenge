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
  page: number | null,
) => {
  if (type === FilterTypes.ALL && priority === FilterPriorityTypes.POPULARITY) {
    return ` query{
      allProducts(sortField: "sales", sortOrder: "DSC", ${
        page === null ? '' : `page:${page}, perPage:12`
      }){
        id
        name
        price_in_cents
        image_url
      }
    }
    `;
  }
  const categoryFilter = getCategory(type);
  return ` query{
    allProducts(${
      page === null ? '' : `page:${page}, perPage:12`
    } sortField: "${getPriority(priority)?.field}", sortOrder: "${
    getPriority(priority)?.order
  }", ${categoryFilter ? `filter: {category: "${getCategory(type)}"}` : ''}){
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `;
};

export const filterProductQuery = (id: string) => {
  return `
    query{
      Product(id: "${id}"){
        id
        name
        price_in_cents
        category
        description
        image_url
      }
    }

    `;
};
