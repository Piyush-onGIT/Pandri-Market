import { ClassConstructor, plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import ApiError from "../../http/ApiError";

const validateDto = async (dto: ClassConstructor<any>, body: any) => {
  const shopDto = plainToClass(dto, body, {
    excludeExtraneousValues: true,
  });

  try {
    await validateOrReject(shopDto);
    return shopDto;
  } catch (err: any) {
    const constraintErrors = err[0].constraints;
    const errorMessage = constraintErrors[Object.keys(constraintErrors)[0]];
    // return errorHandler(res, err, error, 405);
    throw new ApiError(405, errorMessage, err);
  }
};

export { validateDto };
