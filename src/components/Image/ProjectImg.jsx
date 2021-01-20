import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      // console.log("Images", data.images, filename)
      // const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      // if (!image) return null;

      // const imageFluid = image.node.childImageSharp.fluid;
      // return <Img alt={alt} fluid={imageFluid} />;
      return (  
        <div className="video">
             <iframe width="560" height="315" src={filename} frameborder="0" title="Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        </div>
    )
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
