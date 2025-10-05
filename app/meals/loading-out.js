import classes from './page.module.css'

export default function MealsLoadingPage() {
    return (
        <>
            <p className={classes.loading} style={{ textAlign: 'center' }}>Fetching meals...</p>
        </>
    )
}