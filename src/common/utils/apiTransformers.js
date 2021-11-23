export const prepareLecturerList = list => {
  return list.map(lecturer => ({
    label: lecturer.name,
    value: lecturer.id,
  }))
}