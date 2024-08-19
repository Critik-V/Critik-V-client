import ErrorsMessages from "./ErrorsMessages";

export const findErrorMessage = (error: string): string => {
  switch (error) {
    case ErrorsMessages.PATH_NOT_FOUND:
      return "Chemin introuvable";
    case ErrorsMessages.USER_NOT_AUTHENTICATED:
      return "Utilisateur non authentifié";
    case ErrorsMessages.INAPROPRIATE_CONTENT:
      return "Contenu inapproprié";
    case ErrorsMessages.CONTENT_REQUIRED:
      return "Le contenu est requis";
    case ErrorsMessages.FILE_REQUIRED:
      return "Le fichier PDF est requis";
    case ErrorsMessages.ALL_REQUIRED:
      return "Tous les champs sont requis";
    case ErrorsMessages.PDF_CONVERT_FAILED:
      return "Erreur lors de la conversion du PDF";
    case ErrorsMessages.IMPOSSIBLE_ACTION:
      return "Action impossible";
    case ErrorsMessages.INVALID_LINKEDIN_LINK:
      return "Lien LinkedIn invalide";
    case ErrorsMessages.INVALID_GITHUB_LINK:
      return "Lien GitHub invalide";
    case ErrorsMessages.INVALID_OTHER_LINK:
      return "Lien invalide";
    default:
      return "Il y a eu une erreur";
  }
};
