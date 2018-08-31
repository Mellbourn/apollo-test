import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

const WorkflowSerials = () => (
  <Query
    query={gql`
      {
        allTasks {
          nodes {
            workflowSerial
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }

      let key = 0;
      // tslint:disable-next-line:no-console
      console.log("data", data);
      return data.allTasks.nodes.map(
        ({ workflowSerial }: { workflowSerial: number }) => (
          <div key={key++}>
            <p>{`${workflowSerial}`}</p>
          </div>
        )
      );
    }}
  </Query>
);

export default WorkflowSerials;
