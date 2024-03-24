const isValidUrl = (posturl: string) => {
  try {
    const urls = new URL(posturl);
    return urls.href;
  } catch (error) {
    return false;
  }
};

const categorizeURL = (url: string): string => {
  if (!isValidUrl(url)) return "Unknown";

  const photoExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  for (const ext of photoExtensions) {
    if (url.toLowerCase().endsWith(ext)) {
      return "Photo";
    }
  }

  const videoExtensions = [".mp4", ".avi", ".mov", ".wmv", ".mkv"];
  for (const ext of videoExtensions) {
    if (url.toLowerCase().endsWith(ext)) {
      return "Video";
    }
  }

  return "Unknown";
};

export default categorizeURL;
