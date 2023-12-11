function Parent() {
    return(
        <div>
            {/* Call Child1 and Child2 component */}
            {/* Such that Fallback1 component has to be rendered if props for Child1 is not provided */}
            {/* Display name in child1 when props is provided */}
            {/* Such that Fallback2 component has to be rendered if props for Child2 is not provided */}
            {/* Display locality in child2 when props is provided */}
        </div>
    )
}

export default Parent;