import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

const WorkflowSerials = () => (
  <Query
    query={gql`
      {
        allWorkflows {
          nodes {
            serial
            state
            tasksByWorkflowSerial {
              nodes {
                serial
                inputs
              }
            }
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
      return (
        <dl>
          {data.allWorkflows.nodes.map(
            ({
              serial,
              state,
              tasksByWorkflowSerial
            }: {
              serial: number;
              state: number;
              tasksByWorkflowSerial: any;
            }) => [
              <dt key={key}>serial</dt>,
              <dd key={key++}>{`${serial}`}</dd>,
              <dt key={key}>state</dt>,
              <dd key={key++}>{`${state}`}</dd>,
              <dt key={key}>tasksByWorkflowSerial</dt>,
              <dd key={key++}>
                {tasksByWorkflowSerial.nodes.map(
                  ({
                    serial: taskSerial,
                    inputs
                  }: {
                    serial: number;
                    inputs: string;
                  }) => (
                    <p>{`taskSerial: ${taskSerial}, inputs: ${inputs}`}</p>
                  )
                )}
              </dd>
            ]
          )}
        </dl>
      );
    }}
  </Query>
);

export default WorkflowSerials;
