const createIds = (length: number): string[] => {
  const ids: string[] = [];
  for (let i = 0; i < length; i++) {
    ids.push(`id${i + 1}`);
  }

  return ids;
}

export default createIds;