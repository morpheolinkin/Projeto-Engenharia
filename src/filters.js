export function getByTitle (list, keyword) {
    const search = keyword.trim().toLowerCase();
    if (!search.length) return list;
    return list.filter(item => item.PRODUTO.toLowerCase().indexOf(search) > -1);
}