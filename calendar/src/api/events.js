
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchGitHubRepository = async ({start,end}) => {
    const endpoint = 'https://api.github.com/graphql';

    const token = import.meta.env.VITE_GITHUB_TOKEN

    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    let hasNextPage = true;
    let cursor = null;
    const nodes = [];
  
    while (hasNextPage) {
      const query = `
        query {
          repository(owner: "localsend", name: "localsend") {
            defaultBranchRef {
              target {
                ... on Commit {
                  history(since: "${start}", until: "${end}", first: 100, after: ${cursor ? `"${cursor}"` : null}) {
                    nodes {
                      committedDate
                      oid
                      author {
                        name
                        avatarUrl
                      }
                      message
                      url
                    }
                    pageInfo {
                      endCursor
                      hasNextPage
                    }
                  }
                }
              }
            }
          }
        }
      `;
  
      const response = await axios.post(
        endpoint,
        { query },
        { headers }
      );

  
      const responseData = response.data.data.repository.defaultBranchRef.target.history;
      nodes.push(...responseData.nodes);
  
      hasNextPage = responseData.pageInfo.hasNextPage;
      cursor = responseData.pageInfo.endCursor;
    }
  
    return nodes;
  };
  

export const useGitHubRepository = (start, end) => {

    return useQuery(['githubRepository', start, end], () => fetchGitHubRepository({ start, end }));

};
