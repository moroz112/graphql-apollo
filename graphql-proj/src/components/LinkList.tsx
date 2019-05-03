import * as React from 'react';
import { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Link } from './Link';


const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
export class LinkList extends Component {
    render() {
        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }: any) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const linksToRender: any = data.feed.links;

                    return (
                        <div>
                            {linksToRender.map((link: any) => <Link key={link.id} link={link} />)}
                        </div>
                    )
                }}
            </Query>
        )
    }
}