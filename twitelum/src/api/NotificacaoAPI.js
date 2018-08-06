export const notificaExclusao = () => {
  return dispatch => {
    dispatch({
      type: 'ADD_NOTIFICACAO',
      notificacao: 'Tweet excluído com sucesso'
    });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICACAO' });
    }, 2000);
  };
};
