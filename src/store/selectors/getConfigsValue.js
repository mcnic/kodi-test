export const getConfigsValue = (state) =>
  state?.configs?.value || { err: 'worng value' };
