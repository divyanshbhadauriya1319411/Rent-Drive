import { all } from "redux-saga/effects";
import categorySaga from "./CategorySaga";
import carSaga from "./CarSagas";
import brandSaga from "./BrandSagas";
import faqSaga from "./FaqSagas";
import featureSaga from "./FeatureSagas";
import serviceSaga from "./ServiceSagas";
import settingSaga from "./SettingSagas";

export default function* RootSaga() {
    yield all([
        categorySaga(),
        carSaga(),
        brandSaga(),
        faqSaga(),
        featureSaga(),
        serviceSaga(),
        settingSaga(),
    ])
}