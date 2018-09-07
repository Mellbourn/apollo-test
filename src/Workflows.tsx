import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

const WorkflowSerials = () => (
  <div>
    <p className="App-intro">Workflow serials:</p>
    <Query
      pollInterval={300000}
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
        return data.allWorkflows.nodes.map(
          ({
            serial,
            state,
            tasksByWorkflowSerial
          }: {
            serial: number;
            state: number;
            tasksByWorkflowSerial: any;
          }) => (
            <div key={key++}>
              <h2>{`Workflow ${serial}`}</h2>
              {`state: ${state}`}
              <br />
              <h3>Tasks</h3>
              <div>
                {tasksByWorkflowSerial.nodes.map(
                  ({
                    serial: taskSerial,
                    inputs
                  }: {
                    serial: number;
                    inputs: string;
                  }) => (
                    <p
                      key={key++}
                    >{`taskSerial: ${taskSerial}, inputs: ${inputs}`}</p>
                  )
                )}
              </div>
            </div>
          )
        );
      }}
    </Query>
  </div>
);

export default WorkflowSerials;
